const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API;

export function normalizeUrl(url, constantDomain = BASE_URL) {
    if (/^(https?:\/\/)/i.test(url) || url === '/test_video_2.webm' || url === '/test_video.webm') {
        return url;
    }
    return `${constantDomain}${url}`;
}