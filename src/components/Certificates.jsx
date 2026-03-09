import { useState } from "react";

const certificates = [
{ title:"Deep Learning", issuer:"Kaggle", link:"https://drive.google.com/file/d/1UHkxPO7Te7BdkjiyBmlcJl5Q8ywfL5j0/preview" },

{ title:"Data Analytics", issuer:"Deloitte", link:"https://drive.google.com/file/d/1Yqg09g8e15qUJ5WM7lDCWHYgb44DzO1G/preview" },

{ title:"Data Introduction", issuer:"Google", link:"https://drive.google.com/file/d/12k1wi5ig4YskWO_2GZppjjANZ161WVNX/preview" },
{ title:"Data Visualization Tools", issuer:"TATA", link:"https://drive.google.com/file/d/1hn986V_KMaZm4phn09swKilQ0DfKGOz_/preview" },

{ title:"Data Visualization", issuer:"Kaggle", link:"https://drive.google.com/file/d/1Nk9zxrQVFEMLFurtyQ8vbnvK6hpcbp81/preview" },

{ title:"Basics of Programming", issuer:"IBM", link:"https://drive.google.com/file/d/1lxALocgI7P7ZaqGEnwXJ3PjdJJXyt_1u/preview" },


{ title:"Ethical Hacking", issuer:"NPTEL", link:"https://drive.google.com/file/d/1Ruz0rMV58lu8LrO_wJH-Bz8twJvkpZfS/preview" },

{ title:"Frontend Developer React", issuer:"HackerRank", link:"https://drive.google.com/file/d/1Mg9o_kAX-mZsiU7Pw3qvIUDsCTEWonHO/preview" },

{ title:"Generative AI", issuer:"Google", link:"https://drive.google.com/file/d/1UCMC3pKLoXgPOxsTqaD0wVRBLVxgijnE/preview" },

{ title:"MERN Internship", issuer:"Internship", link:"https://drive.google.com/file/d/1KWY1AMeByIu6wbg63fgJD3qicyw4VpZs/preview" },

{ title:"Intro to Machine Learning", issuer:"Kaggle", link:"https://drive.google.com/file/d/1K1NPLwavbSzHcGkuogklVdU4czi3_EKw/preview" },

{ title:"Java Basics", issuer:"HackerRank", link:"https://drive.google.com/file/d/1NebKpAiQvLe-hxOzzPEkUyvPx6fld-N_/preview" },

{ title:"NodeJS Basics", issuer:"HackerRank", link:"https://drive.google.com/file/d/1BrQNor_Plvq1dsSi9n6njM23QQ4Pg8Rc/preview" },

{ title:"Python NPTEL", issuer:"NPTEL", link:"https://drive.google.com/file/d/1ed1BSfOYWJvA355DW1xVQlC2ZiqxGCZ_/preview" }

];

export default function Certificates(){

const [index,setIndex] = useState(0);
const [preview,setPreview] = useState(null);

const prev = () => {
if(index === 0) return;
setIndex(index - 4);
};

const next = () => {
if(index + 4 >= certificates.length) return;
setIndex(index + 4);
};

return(

<section id="certificates" className="py-32 px-6 max-w-7xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-14">
Certificates
</h2>

<div className="relative mx-auto max-w-4xl bg-card border border-white/10 rounded-3xl p-12">

<div className="grid grid-cols-2 gap-8">

{certificates.slice(index,index+4).map((cert,i)=>(
<div
key={i}
className="border border-white/10 rounded-xl p-6 hover:border-primary hover:-translate-y-1 transition duration-300 bg-white/5"
>

<h3 className="text-lg font-semibold mb-2">
{cert.title}
</h3>

<p className="text-gray-400 text-sm mb-4">
Issued by {cert.issuer}
</p>

<button
onClick={()=>setPreview(cert.link)}
className="px-4 py-2 bg-primary text-black rounded-lg text-sm"
>
View Certificate
</button>

</div>
))}

</div>

<button
onClick={prev}
className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 w-12 h-12 rounded-full"
>
◀
</button>

<button
onClick={next}
className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 w-12 h-12 rounded-full"
>
▶
</button>

</div>


{/* Preview Modal */}

{preview && (

<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">

<div className="relative w-full max-w-5xl h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl">

<button
onClick={()=>setPreview(null)}
className="absolute top-4 right-4 z-10 bg-white text-black px-3 py-1 rounded-lg"
>
Close
</button>

<div className="w-full h-full flex items-center justify-center overflow-auto">

<iframe
src={preview}
title="certificate"
className={`border-0 ${
preview.includes("1lxALocgI7P7ZaqGEnwXJ3PjdJJXyt_1u")
? "rotate-90 w-[85vh] h-[85vw]"
: "w-full h-full"
}`}
/>

</div>

</div>

</div>

)}

</section>

);
}