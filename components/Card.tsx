
export default function Card({title,value}:{title:string,value:string|number}){
return <div style={{background:'white',padding:20,borderRadius:12,boxShadow:'0 2px 8px #ddd'}}>
<div style={{color:'#666'}}>{title}</div>
<h2>{value}</h2>
</div>}
