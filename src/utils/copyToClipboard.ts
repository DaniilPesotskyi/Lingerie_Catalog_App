const copyToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'Скопійовано!' : 'Не вдалося скопіювати.';
        console.log(msg)
    } catch (err) {
        console.error('clipboard error: ', err);
    }
    document.body.removeChild(textArea);
}

export default copyToClipboard