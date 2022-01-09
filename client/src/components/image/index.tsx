import React from 'react';
import { useServerImageResource } from 'hooks/use-server-image-resource';

type ImgAttributes = React.ImgHTMLAttributes<HTMLImageElement>;

interface Props extends Pick<ImgAttributes, Exclude<keyof ImgAttributes, 'src' | 'onError'>> {
  src?: string | null;
  fallbackSrc?: string | null;
}

export const Image: React.FC<Props> = (props) => {
  const { fallbackSrc, alt, children, ...imgProps } = props;

  const { url, fallBackUrl } = useServerImageResource(props.src, fallbackSrc);

  /**
   * @see: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror
   */
  const onError = React.useCallback<React.EventHandler<any>>(
    (e) => {
      e.target.onerror = null;
      e.target.src = fallBackUrl;
    },
    [fallBackUrl],
  );

  return <img {...imgProps} alt={alt} src={url} onError={onError} />;
};
