import { ElMessage } from 'element-plus';
import type { ValidationErrorResponse } from '@/shared/types/ValidationErrorResponse';

export const useAppAlerts = () => {
  const parseMessageFromValidationResponse = (validationError: ValidationErrorResponse) => {
    return Object.entries(validationError.data)
      .map(([key, value]) => {
        return value?.join(' ');
      });
  };

  const showSuccessAlert = (text: string) => ElMessage.success({
    message: text,
    duration: 4500,
  });
  const showErrorAlert = (text: string) => ElMessage.error({
    message: text,
    duration: 4500,
  });
  const showWarningAlert = (text: string) => ElMessage.warning({
    message: text,
    duration: 4500,
  });

  return {
    showErrorAlert,
    showSuccessAlert,
    showWarningAlert,
    parseMessageFromValidationResponse,
  };
};