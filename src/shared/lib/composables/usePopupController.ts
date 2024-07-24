import { defineExpose, ref } from 'vue';

interface IPopupController {
    resolve: Function,
    reject: Function,
}

export const usePopupController = () => {
    const isOpen = ref(false);

    const popupController: IPopupController = {
        resolve: () => null,
        reject: () => null,
    };
    
    const popupTitle = ref('');
    const popupSubtitle = ref('');

    function open(title = 'Вы уверены что хотите сделать это?', subtitle = ''): Promise<boolean> {
        popupTitle.value = title;
        popupSubtitle.value = subtitle;
        isOpen.value = true;

        return new Promise((resolve, reject) => {
            popupController.resolve = resolve;
            popupController.reject = reject;
        });
    }

    function close() {
        isOpen.value = false;
    }
    function cancel() {
        popupController.resolve(false);
        close();
    }

    function confirm(data?: any) {
        popupController.resolve(data ?? true);
        close();
    }
    
    return {
        isOpen,
        popupController,

        open,
        cancel,
        confirm,
        close,
    };
};