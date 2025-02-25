"use client"; // Para evitar problemas no Next.js App Router

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface BannerPost {
  id: number;
  title: string;
  image: { url: string }[];
}

export default function Banner() {
  const [banners, setBanners] = useState<BannerPost[]>([]);

  useEffect(() => {
    async function fetchBanners() {
      try {
        const res = await fetch(
          "http://localhost:1337/api/posts?filters[featured][$eq]=true&populate=image"
        );
        if (!res.ok) {
          throw new Error("Falha ao buscar banners.");
        }
        const data = await res.json();
        setBanners(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBanners();
  }, []);

  return (
    <div className="max-w-[1218px] mx-auto mb-6">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {banners.map((post) => (
          <SwiperSlide key={post.id}>
            <div
              className="h-[450px] w-full rounded-xl flex flex-col justify-end gap-4 p-10 bg-cover bg-center"
              style={{ backgroundImage: `url(http://localhost:1337${post.image[0]?.url})` }}
            >
              <h2 className="text-white font-semibold text-4xl">
                {post.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
