export interface BlogDetailParams {
  params: {
    author: string;
    slug: string;
  };
}

export interface LinkValues {
  id: number;
  head: string;
  href: string;
}

export interface ServiceValues {
  id: number;
  title: string;
  description: string;
  detail: string;
  icon: string;
  link: string;
}

export interface CarouselProps {
  children: React.ReactNode;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  slidesToShow?: number;
  arrows?: boolean;
}
