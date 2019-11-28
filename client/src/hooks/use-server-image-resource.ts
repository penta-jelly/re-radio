import * as React from 'react';

const defaultSrc = 'https://www.emyspot.com/medias/images/page404.png';

export function useServerImageResource(
  src: string | null | undefined,
  fallbackSrc: string | null | undefined = defaultSrc,
) {
  const fallBackUrl = React.useMemo(() => fallbackSrc || defaultSrc, [fallbackSrc]);
  const isUrl = React.useCallback((input: string) => /(http|https|data:image|\/asset\/)/.test(input), []);
  const url = React.useMemo(() => {
    if (!src) {
      return fallBackUrl;
    }
    if (isUrl(src)) {
      return src;
    }
    if (process.env.NODE_ENV !== 'production') {
      return `http://${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}/images/${src}`;
    }
    return `/images/${src}`;
  }, [isUrl, src, fallBackUrl]);

  return { url, fallBackUrl };
}
