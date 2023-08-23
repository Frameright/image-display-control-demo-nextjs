import { ImageDisplayControl } from '@frameright/react-image-display-control'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div
      className="relative aspect-[1/1] md:aspect-[2/1] xl:aspect-[3/1]"
      data-idc-parent
      style={{ contain: 'paint' }}
    >
      <ImageDisplayControl>
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          className={cn('shadow-sm w-full', {
            'hover:shadow-lg transition-shadow duration-200': slug,
          })}
          fill={true}
          style={{ objectFit: 'cover' }}
          sizes={`(min-width: 1540px) 1540px, 100vw`}
          priority={true}
          data-path-on-server={`public/${src}`}
        />
      </ImageDisplayControl>
    </div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
