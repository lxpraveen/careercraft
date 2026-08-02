const services=[
{
title:"LinkedIn Optimization",
price:"₹999"
},
{
title:"Resume Optimization",
price:"₹799"
},
{
title:"CV Optimization",
price:"₹699"
},
{
title:"Certificate Optimization",
price:"₹499"
},
{
title:"Job Portal Optimization",
price:"₹899"
},
{
title:"Interview Preparation",
price:"₹1499"
}
]

const ServicesSection=()=>{

return(

<section className="bg-slate-950 text-white py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-16">

Our Services

</h2>

<div className="grid md:grid-cols-3 gap-8">

{

services.map((item,index)=>(

<div
key={index}
className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-400 duration-300"
>

<h3 className="text-2xl font-bold">

{item.title}

</h3>

<p className="text-cyan-400 text-3xl mt-5">

{item.price}

</p>

<button className="w-full mt-8 bg-cyan-500 py-3 rounded-xl">

Buy Now

</button>

</div>

))

}

</div>

</div>

</section>

)

}

export default ServicesSection