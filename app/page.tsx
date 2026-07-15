
'use client'
import Card from '../components/Card'
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer} from 'recharts'
const data=[
{name:'Assigned',value:2120},
{name:'Available',value:330},
{name:'Unused',value:74},
{name:'Expiring',value:18}
]
export default function Home(){
return (
<div style={{display:'grid',gridTemplateColumns:'260px 1fr',minHeight:'100vh'}}>
<aside style={{background:'#111827',color:'white',padding:20}}>
<h2>License Management</h2>
<hr/>
<ul style={{listStyle:'none',padding:0,lineHeight:'2.2em'}}>
<li>🏠 Dashboard</li>
<li>📦 Inventory</li>
<li>👥 Allocation</li>
<li>✅ Compliance</li>
<li>📈 Optimization</li>
<li>📅 Renewals</li>
<li>✔ Approvals</li>
<li>📊 Reports</li>
<li>🤖 AI Assistant</li>
</ul>
</aside>
<main style={{padding:24}}>
<h1>Executive Dashboard</h1>
<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
<Card title='Total Licenses' value='2,450'/>
<Card title='Compliance' value='97%'/>
<Card title='Potential Savings' value='₹12.5L'/>
<Card title='Renewals' value='18'/>
</div>
<div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:20,marginTop:24}}>
<div style={{background:'white',padding:20,borderRadius:12}}>
<h3>License Overview</h3>
<div style={{width:'100%',height:300}}>
<ResponsiveContainer>
<BarChart data={data}>
<XAxis dataKey='name'/><YAxis/><Tooltip/>
<Bar dataKey='value'/>
</BarChart>
</ResponsiveContainer>
</div>
</div>
<div style={{background:'white',padding:20,borderRadius:12}}>
<h3>Recent Alerts</h3>
<ul>
<li>Adobe Pro: 15 unused licenses</li>
<li>Microsoft E5 renewal in 18 days</li>
<li>Visio overallocated by 12</li>
</ul>
<h3>AI Recommendations</h3>
<ul>
<li>Reclaim 18 inactive Adobe licenses.</li>
<li>Purchase 25 Office licenses next quarter.</li>
<li>Renew Microsoft E5 first.</li>
</ul>
</div>
</div>
</main>
</div>)
}
