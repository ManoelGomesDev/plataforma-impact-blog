'use client';  // Diretiva para tornar esse componente um Client Component

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';  // Use o hook useParams

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
  image: string;
}

export default function PostPage() {
  const { slug } = useParams();  // Pega o slug da URL diretamente usando o hook useParams
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const res = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=*`);
      const data = await res.json();
      setPost(data.data[0]);
      
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="col-span-12 bg-cover bg-center h-[450px] max-w-[1218px] w-full mx-auto rounded-xl flex flex-col justify-center gap-4 pl-10 pb-10">
      <h1 className='font-semibold text-4xl max-w-[720px]'>{post.title}</h1>
      <p className="bg-[#4b6bfb] text-white font-medium px-2 py-1 rounded-lg max-w-fit">{post.category}</p>
      <p className='font-semibold'>{post.author}</p>
      <p className='font-semibold'>{new Date(post.createdAt).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content || 'Conteúdo não disponível' }} />
    </div>
  );
}
