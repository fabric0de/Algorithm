function solution(video_len, pos, op_start, op_end, commands) {
    
    const toSeconds = (time) => {
        const [mm, ss] = time.split(':').map(Number);
        return mm * 60 + ss;
    };

    const toTimeString = (seconds) => {
        const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
        const ss = String(seconds % 60).padStart(2, '0');
        return `${mm}:${ss}`;
    };

    let videoLen = toSeconds(video_len);  
    let currentPos = toSeconds(pos);       
    const openingStart = toSeconds(op_start);
    const openingEnd = toSeconds(op_end);   

    if (currentPos >= openingStart && currentPos <= openingEnd) {
        currentPos = openingEnd;
    }

    for (let command of commands) {
        if (command === 'prev') {
            currentPos = Math.max(0, currentPos - 10);
        } else if (command === 'next') {
            currentPos = Math.min(videoLen, currentPos + 10);
        }

        if (currentPos >= openingStart && currentPos <= openingEnd) {
            currentPos = openingEnd;
        }
    }

    return toTimeString(currentPos);
}
