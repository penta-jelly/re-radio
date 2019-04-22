import React from 'react';

const defaultSrc = 'https://www.emyspot.com/medias/images/page404.png';

type ImgAttributes = React.ImgHTMLAttributes<HTMLImageElement>;

interface Props extends Pick<ImgAttributes, Exclude<keyof ImgAttributes, 'src' | 'onError'>> {
  src?: string | null;
  fallbackSrc?: string | null;
}

export const Image: React.FC<Props> = props => {
  const { fallbackSrc, ...imgProps } = props;

  const fallBackUrl = React.useMemo(() => fallbackSrc || defaultSrc, [fallbackSrc]);

  const isUrl = React.useCallback((input: string) => /(http|data\:image)/.test(input), []);

  const url: string = React.useMemo(() => {
    if (!props.src) {
      return fallBackUrl;
    }
    if (isUrl(props.src)) {
      return props.src;
    }
    if (process.env.NODE_ENV !== 'production') {
      return `http://${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}/images/${props.src}`;
    }
    return `/images/${props.src}`;
  }, [isUrl, props.src, fallBackUrl]);

  /**
   * @see: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror
   */
  const onError = React.useCallback<React.EventHandler<any>>(e => {
    e.target.onerror = null;
    e.target.src = fallBackUrl;
  }, []);

  return <img {...imgProps} src={url} onError={onError} />;
};
