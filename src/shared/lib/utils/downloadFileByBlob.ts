export function downloadFileByBlob(blobPart: BlobPart, name: string): void {
    const fileUrl = window.URL.createObjectURL(new Blob([blobPart]));
    downloadFile(fileUrl, name);
}

export function downloadFile(fileUrl: string, fileName: string): void {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
}