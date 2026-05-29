import React,{useMemo,useState}from"react";import{AnimatePresence,motion}from"framer-motion";import{ArrowLeft,ArrowRight,ArrowUpRight,CheckCircle2,XCircle,Layers3,Radar,Target,Sparkles,Workflow as WorkflowIcon,CircleDollarSign,Clock3,FileText,Handshake,BriefcaseBusiness,MonitorSmartphone,Grid3X3,ShieldCheck,ShieldAlert,TrendingUp,ClipboardCheck,Flag,Boxes,LineChart,Users,MessageSquare,Route}from"lucide-react";

const client="Mohammed Deif",by="Mohannad Ali",title="GO-TO-MARKET FOUNDATION PROPOSAL";

const slides=[
["FOUNDATION OPERATING SYSTEM",title,"A premium foundation system for Mohammed Deif’s SaaS CRM / Lead Management Platform — designed to prepare the product for trust, clarity, launch, and growth before monthly execution begins.","cover",true],
["EXECUTIVE SUMMARY","Turning a technical CRM system into a business growth solution","This phase turns the SaaS CRM from a technical product into a clear business growth solution, preparing it before monthly Go-To-Market execution.","summary"],
["BUSINESS CHALLENGE","Business Challenge & Why Foundation Matters","The product may be technically strong, but the market does not buy technical systems alone. Business owners need to quickly understand the value, trust the brand, and see how the system improves sales control.","challenge"],
["PROJECT UNDERSTANDING","Project Understanding & Positioning Direction","For Mohammed Deif’s SaaS CRM / Lead Management Platform, the opportunity is to position the product beyond software features — as a business control system that helps companies stop losing opportunities, organize follow-ups, and see sales activity clearly.","positioning",true],
["BUYER MINDSET","Target Buyer Mindset","The foundation should speak to the real decision-makers behind CRM adoption: owners, sales leaders, marketers, and operations teams.","buyers",true],
["AFTER THIS PHASE","What Mohammed Gets After This Phase","The output is not only files. It is a clearer market story, stronger trust signals, better sales messaging, and a more launch-ready SaaS product.","outcomes"],
["FOUNDATION STRUCTURE","Connected workflow before monthly execution","Brand Identity, Marketing Plan, and 3-Month Strategy work together as one Go-To-Market foundation system.","workflow",true],
["SERVICE 01","Full Brand Identity Package","A brand system architecture that gives the platform a premium SaaS presence across identity, digital, sales, and product-facing touchpoints.","brand"],
["BRAND IDENTITY OUTPUT PREVIEW","Brand Identity Output Preview","A visual preview of the type of identity system Mohammed will receive — including logo usage, color system, typography, brand applications, and digital touchpoints.","preview",true],
["APPLICATION SYSTEM","Brand Applications","A simplified view of the brand applications that make the identity usable across print, sales, and digital touchpoints.","apps"],
["SERVICE 02","Marketing Plan & Messaging Direction","A strategic marketing plan supported by clear messaging pillars that make the product easier to understand, sell, and launch.","plan",true],
["SERVICE 03","3-Month Launch Strategy & Funnel Direction","A 3-month launch roadmap connected to the customer funnel: Awareness, Consideration, Conversion, and Sales Enablement.","roadmap",true],
["INVESTMENT","Foundation Investment Options","A transparent premium pricing board with the recommended full foundation package and separate service approval options.","pricing"],
["PAYMENT TERMS","3-step payment timeline","A staged payment structure aligned with kickoff, strategic direction approval, and final delivery.","payment",true],
["ONBOARDING","Required From Client","A lighter onboarding checklist grouped around product access, business inputs, and existing assets.","required"],
["TIMELINE","Estimated Timeline","Estimated Duration: 7–8 Weeks. Timeline may shift based on feedback speed, approval rounds, and availability of required product information.","timeline",true],
["COMMERCIAL NOTES","Commercial Notes","Clear commercial terms to define revision rounds, pricing boundaries, and what is excluded from the quoted investment unless stated otherwise.","commercial"],
["SCOPE BOUNDARIES","Not Included","This proposal covers the foundation phase only. Monthly execution, media budget, production, and development are proposed separately.","excluded",true],
["NEXT PHASE","Next Phase: Monthly Go-To-Market Execution","After the foundation is built, execution can begin with stronger positioning, clearer messaging, and better conversion readiness.","next"],
["APPROVAL","Ready to Build the Foundation","Approval starts the foundation phase: first payment, discovery session, product access, asset collection, and execution kickoff.","approval",true],
["THANK YOU","Thank You","Thank you, Mohammed Deif. We look forward to building a Go-To-Market foundation that reflects the quality, ambition, and market potential of the product.","thanks"]
].map(([k,t,s,type,wide])=>({k,t,s,type,wide}));

function BG(){return <div className="bg"><motion.i className="orb a" animate={{x:[0,35,0],y:[0,18,0]}} transition={{duration:9,repeat:Infinity}}/><motion.i className="orb b" animate={{x:[0,-35,0],y:[0,-22,0]}} transition={{duration:11,repeat:Infinity}}/></div>}

function Label({children,tone="green",icon:Icon=ArrowUpRight}){return <span className={'label '+tone}><Icon size={11}/>{children}</span>}

function Card({children,cls="",delay=0}){return <motion.div className={'card '+cls} initial={{opacity:0,y:12,filter:'blur(6px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} whileHover={{y:-3,boxShadow:'0 0 0 1px rgba(103,245,200,.2),0 0 24px rgba(103,245,200,.12),0 20px 60px rgba(0,0,0,.35)'}} transition={{duration:.35,delay}}><div className="gridfx"/><div className="glow"/><div className="inside">{children}</div></motion.div>}

function Shell({slide,i,total,children}){return <motion.section className="slide" key={slide.type} initial={{opacity:0,x:28,scale:.99}} animate={{opacity:1,x:0,scale:1}} exit={{opacity:0,x:-28,scale:.99}} transition={{duration:.42}}><header><Label>{slide.k}</Label><div className="deck"><span>{title}</span><b>{String(i+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</b></div></header>{slide.wide?<div className="wide"><div className="wideTitle"><h1>{slide.t}</h1><p>{slide.s}</p></div><main>{children}</main></div>:<div className="split"><aside><div><h1>{slide.t}</h1><p>{slide.s}</p></div><Card cls="prep"><span>Prepared for<b>{client}</b></span><i/><span>Prepared by<b>{by}</b></span></Card></aside><main>{children}</main></div>}</motion.section>}

function Pill({children,t='green'}){return <span className={'pill '+t}>{children}</span>}
function Metric({title,val}){return <Card cls="metric"><small>{title}</small><strong>{val}</strong></Card>}
function Chip({children,red=false}){return <div className={'chip '+(red?'red':'')}><CheckCircle2 size={14}/>{children}</div>}

function Cover(){
return <div className="twocol">
<Card cls="pad">
<div className="head"><div><Label icon={Layers3}>Launch Control Interface</Label><h2>Foundation Operating Board</h2></div><Pill>LIVE SYSTEM</Pill></div>
<div className="three">{['Brand Identity','Marketing Plan','3-Month Strategy'].map((x,i)=><Card cls="module" key={x}><em/><h3>{x}</h3><p>Foundation Module 0{i+1}</p></Card>)}</div>
<div className="two"><Metric title="Total Foundation" val="145,000 EGP"/><Metric title="Estimated Duration" val="7–8 Weeks"/></div>
</Card>
<div className="stack">
<Card cls="pad"><Label icon={Target} tone="blue">Client Profile</Label><small>Prepared for</small><h2>{client}</h2><p className="note">SaaS CRM / Lead Management Platform focused on lead control, sales follow-up discipline, team visibility, and business growth.</p></Card>
<Card cls="pad"><Label icon={Sparkles}>Proposal Intent</Label><h3>Not a PDF. A Go-To-Market system.</h3><p>This deck reflects the structure and creative execution expected from the actual foundation work.</p></Card>
</div>
</div>
}

function Summary(){
return <div className="twocol">
<Card cls="pad"><Label icon={LineChart} tone="blue">Executive Summary</Label><h2>From technical CRM to growth solution.</h2><p className="note">This foundation phase translates the platform into a clear commercial story: what it solves, who needs it, why it matters, and how it should be presented before monthly Go-To-Market execution begins.</p></Card>
<Card cls="pad"><Label icon={Target}>Foundation Focus</Label>{['Clarify the value proposition','Build professional SaaS brand trust','Define audience and buyer pain points','Shape launch messaging and campaign direction','Prepare the product before paid execution'].map(x=><Chip key={x}>{x}</Chip>)}</Card>
</div>
}

function Challenge(){
let risks=['Unclear positioning','Weak first impression','Inconsistent sales messaging','Wasted ad spend','Weak lead quality','Unclear customer trust'];
return <div className="twocol">
<Card cls="pad"><Label icon={ShieldAlert} tone="amber">Current Business Challenge</Label><p className="note">The product may be technically strong, but the market does not buy technical systems alone. Business owners need to quickly understand the value, trust the brand, and see how the system improves sales control.</p></Card>
<Card cls="pad"><Label tone="red" icon={XCircle}>Why Foundation Matters</Label>{risks.map(x=><div className="chip red" key={x}><XCircle size={14}/>{x}</div>)}<p className="brandNote">This foundation phase prepares the product to be understood, trusted, presented, marketed, and sold before monthly execution begins.</p></Card>
</div>
}

function Positioning(){
return <Card cls="pad">
<div className="head"><Label icon={Radar}>Positioning Transformation</Label><small>Software Features → Business Control</small></div>
<div className="twocol">
<Card cls="center"><small>FROM</small><h2>CRM Software</h2><p>Feature-led technical product perception.</p></Card>
<Card cls="center"><small>TO</small><h2>Lead Control & Sales Visibility Platform</h2><p>A business control system for lost leads, follow-up discipline, and sales visibility.</p></Card>
</div>
<div className="three">{[['Lead Control','Stop losing opportunities'],['Follow-up Discipline','Organize sales actions'],['Sales Visibility','See pipeline activity clearly']].map(([a,b],i)=><Card cls="mini" key={a}><b>0{i+1}</b><h4>{a}</h4><p>{b}</p></Card>)}</div>
</Card>
}

function Buyers(){
let profiles=[
['Business Owner / Founder','Needs visibility, control, and confidence that leads are not being wasted.',BriefcaseBusiness],
['Sales Manager','Needs follow-up discipline, team accountability, and pipeline clarity.',Users],
['Marketing Manager','Needs lead quality, source performance, and conversion movement.',LineChart],
['Operations Manager','Needs structure, process, and fewer random sales activities.',WorkflowIcon]
];
return <div className="four">{profiles.map(([a,b,Icon])=><Card cls="pad smallcard" key={a}><Icon size={20}/><h4>{a}</h4><p>{b}</p></Card>)}</div>
}

function Outcomes(){
let groups=['Clear SaaS positioning','Professional brand image','Defined customer segments','Buyer persona and customer pain points','Messaging system for sales and marketing','3-month launch roadmap','Campaign directions ready for execution','Better readiness before spending on ads'];
return <div className="four">{groups.map(x=><Card cls="pad smallcard" key={x}><CheckCircle2 size={18}/><h4>{x}</h4></Card>)}</div>
}

function Workflow(){
let arr=[['01','Brand Identity','Build trust and visual credibility'],['02','Marketing Plan','Define market, audience, funnel, and messaging'],['03','3-Month Strategy','Turn the plan into a launch roadmap'],['04','Monthly Execution Later','Move into campaigns with stronger readiness']];
return <Card cls="pad"><div className="head"><Label icon={WorkflowIcon}>Foundation Structure</Label><small>Foundation → Execution</small></div><div className="four">{arr.map(([n,t,d])=><Card cls="flow" key={t}><b>{n}</b><h3>{t}</h3><p>{d}</p></Card>)}</div></Card>
}

function Brand(){
let groups=[
['Core Identity',['Brand concept direction','Logo system','Color palette','Typography system']],
['Visual System',['Visual language','Icon direction','Mini brand guidelines']],
['Digital Direction',['Social media look & feel','Website hero visual direction']],
['Sales Presence',['Sales presentation visual direction','Brand mockups']]
];
return <div className="twocol">
<Card cls="pad"><Label icon={Sparkles}>Brand System Architecture</Label><small>Service Fee</small><h2 className="price">55,000 EGP</h2><Pill t="amber">45–60 Days</Pill><p>Designed to make the SaaS product look credible, consistent, and ready across digital, sales, and brand touchpoints.</p></Card>
<div className="two">{groups.map(([g,it])=><Card cls="pad" key={g}><h4>{g}</h4>{it.map(x=><p className="dash" key={x}>— {x}</p>)}</Card>)}</div>
</div>
}

function Preview(){
let colors=['#00F2C3','#6C5CFF','#111827','#1F2937','#E5E7EB'],apps=['Business Card','Proposal Cover','Letterhead','Email Signature','App Icon'];
return <Card cls="brandBoard">
<div className="head"><div><Label icon={Sparkles}>Premium SaaS Brand Identity Board</Label><h3>LeadPro Smart CRM — illustrative identity preview</h3></div><Pill>Brand System Preview</Pill></div>
<div className="brandCols">
<Card cls="col"><h4>01. Logo System</h4><div className="logo"><b>L</b><span>LeadPro<em>SMART CRM</em></span></div><div className="two miniTwo"><div className="mock">Icon / Mark</div><div className="mock gridmock">Clear Space</div></div></Card>
<Card cls="col"><h4>02. Color & Typography</h4><div className="palette">{colors.map(c=><i key={c} style={{background:c}} title={c}/>)}</div><div className="type"><b>Aa</b><span>Urbanist<br/>Bold / SemiBold / Medium / Regular</span><h5>Heading 1</h5><p>Body text sample.</p></div><button>Primary</button><button>Secondary</button></Card>
<Card cls="col"><h4>03. Digital Look & Feel</h4><div className="post">Control Leads.<br/>Close More Deals.<br/>Grow Your Business.</div><div className="hero">The CRM that helps you control leads, follow up, and grow.</div><div className="lead">New Lead <b>87</b><i/></div></Card>
<Card cls="col"><h4>04. Brand Applications</h4>{apps.map((a,i)=><div className="app" key={a}><i/>{a}<small>0{i+1}</small></div>)}</Card>
</div>
<p className="brandNote">The visuals shown are illustrative previews of the expected delivery style. Final designs will be custom-created after discovery and brand direction approval.</p>
</Card>
}

function Applications(){
let groups=[
['Print Assets',['Business card','Letterhead','Envelope','Folder']],
['Sales Assets',['Proposal cover','Quotation direction','Invoice direction','Brochure / flyer']],
['Digital Assets',['Social mockups','Website header','App icon','Email signature']]
];
return <div className="three fill">{groups.map(([g,it])=><Card cls="pad" key={g}><Label icon={Boxes}>{g}</Label>{it.map(x=><p className="dash" key={x}>— {x}</p>)}</Card>)}</div>
}

function Plan(){
let plan=['Market overview','Competitor positioning','Target audience segments','Buyer persona','Pain points and objections','Funnel direction','Channel recommendations','KPI framework'];
let pillars=[
['Stop Losing Leads','Your leads are not the problem. Your follow-up system is.'],
['Control Every Follow-up','Turn random sales activity into a clear follow-up process.'],
['See Your Pipeline Clearly','Know where every opportunity stands before it disappears.'],
['Make Better Sales Decisions','Use lead visibility to understand what is working.']
];
return <div className="twocol">
<Card cls="pad"><Label icon={Target}>Marketing Plan Includes</Label><h2 className="price">45,000 EGP</h2><Pill t="amber">1–1.5 Months</Pill>{plan.map(x=><p className="dash" key={x}>— {x}</p>)}</Card>
<Card cls="pad"><Label icon={MessageSquare} tone="blue">Messaging Pillars Preview</Label>{pillars.map(([a,b])=><div className="soft" key={a}><h4>{a}</h4><p>{b}</p></div>)}</Card>
</div>
}

function Roadmap(){
let months=[['Month 01','Awareness & Product Understanding'],['Month 02','Trust Building & Lead Generation'],['Month 03','Optimization & Scaling']];
let funnel=[
['Awareness','Educate business owners about lost leads and poor follow-up.'],
['Consideration','Show how the platform organizes sales activity and visibility.'],
['Conversion','Drive demo requests, consultation interest, or trial interest.'],
['Sales Enablement','Support sales with pitch messages, objections, and follow-up content.']
];
return <div className="roadmap">
<Card cls="pad"><Label icon={WorkflowIcon}>3-Month Launch Strategy</Label><h2 className="price">45,000 EGP</h2><Pill t="amber">1–1.5 Months</Pill>{months.map(([a,b])=><div className="soft mini" key={a}><b>{a}</b><p>{b}</p></div>)}</Card>
<Card cls="pad"><Label icon={Route} tone="blue">Launch Funnel</Label>{funnel.map(([a,b])=><div className="soft" key={a}><h4>{a}</h4><p>{b}</p></div>)}</Card>
</div>
}

function Pricing(){
return <div className="twocol">
<Card cls="pad"><Label icon={CircleDollarSign}>Recommended Full Foundation Package</Label><h2>Brand Identity + Marketing Plan + 3-Month Strategy</h2><div className="investment"><span>Total Foundation Investment</span><b>145,000 EGP</b></div><p>Can also be approved in separate phases based on business priority.</p></Card>
<div className="stack">{[['Full Brand Identity Package','55,000 EGP'],['Marketing Plan','45,000 EGP'],['3-Month Marketing Strategy','45,000 EGP']].map(([a,b],i)=><Card cls="row" key={a}><span>Option 0{i+1}</span><b>{a}</b><strong>{b}</strong></Card>)}</div>
</div>
}

function Payment(){
return <Card cls="pad"><div className="head"><Label icon={Clock3}>Payment Timeline</Label><small>3 Milestones</small></div><div className="three fill">{[['50%','Kickoff','Upon proposal approval and project kickoff'],['30%','Direction Approval','After strategic and brand direction approval'],['20%','Final Delivery','Before final delivery']].map(([a,b,c])=><Card cls="pay" key={a}><b>{a}</b><h3>{b}</h3><p>{c}</p></Card>)}</div></Card>
}

function Required(){
return <div className="three fill">{[['Product Access',['Product demo or access','Product screenshots','Current website/app link if available']],['Business Inputs',['Target market notes','Competitor examples','Pricing model if available','Sales process notes']],['Existing Assets',['Existing logo/assets if available','Any previous marketing material']]].map(([g,it])=><Card cls="pad" key={g}><Label icon={ClipboardCheck}>{g}</Label>{it.map(x=><p className="dash" key={x}>— {x}</p>)}</Card>)}</div>
}

function Timeline(){
return <Card cls="pad"><div className="head"><Label icon={Clock3}>Project Timeline System</Label><Pill>Estimated Duration: 7–8 Weeks</Pill></div>{['Week 1–2: Discovery, product understanding, strategic direction','Week 3–5: Brand identity development','Week 4–6: Marketing plan development','Week 5–7: 3-month launch strategy','Week 7–8: Final refinement and delivery'].map(x=><div className="time" key={x}>{x}</div>)}<p className="brandNote">Timeline may shift based on feedback speed, approval rounds, and availability of required product information.</p></Card>
}

function Commercial(){
return <div className="twocol">
<Card cls="pad"><Label icon={ClipboardCheck}>Revision Rounds</Label>{[['Brand direction','Up to 2 revision rounds'],['Marketing plan','Up to 2 revision rounds'],['Final strategy refinement','Up to 1 revision round']].map(([a,b])=><div className="row" key={a}><b>{a}</b><strong>{b}</strong></div>)}</Card>
<Card cls="pad"><Label tone="amber" icon={ShieldAlert}>Commercial Note</Label><h2>Investment boundaries are clear from the start.</h2><p>All prices are exclusive of taxes, paid tools, subscriptions, media budget, and third-party production costs unless stated otherwise.</p></Card>
</div>
}

function Excluded(){
let arr=['Monthly social media execution','Paid ads management','Ads budget','Website development','Full app UI/UX design','Video production','Photography','Motion graphics','SEO execution','Community management','CRM technical setup','Tools and subscriptions'];
return <Card cls="pad"><Label tone="red" icon={XCircle}>Scope Guardrails</Label><div className="excluded">{arr.map(x=><div className="chip red" key={x}><XCircle size={13}/>{x}</div>)}</div></Card>
}

function Next(){
return <div className="twocol">
<Card cls="pad"><Label icon={Flag}>Go-To-Market Execution Board</Label><h2>Execution starts stronger after the foundation is built.</h2><p>Once positioning, messaging, brand direction, and launch roadmap are ready, monthly execution becomes more focused and measurable.</p></Card>
<div className="two compact">{['Social media execution','Paid campaigns','Lead generation','Landing page direction','Reporting','Optimization','Sales enablement content'].map(x=><Card cls="tiny" key={x}><CheckCircle2 size={16}/>{x}</Card>)}</div>
</div>
}

function Approval(){
return <Card cls="pad"><Label icon={Handshake}>Kickoff Checklist</Label><div className="three fill">{['Proposal approval','First payment','Discovery session','Product access','Asset collection','Execution kickoff'].map((x,i)=><Card cls="flow" key={x}><b>0{i+1}</b><h3>{x}</h3></Card>)}</div></Card>
}

function Thanks(){
return <div className="twocol">
<Card cls="pad closing"><Label icon={Handshake}>Executive Closing</Label><h2>Thank you, Mohammed Deif</h2><p>We look forward to building a Go-To-Market foundation that reflects the quality, ambition, and market potential of the product.</p></Card>
<Card cls="pad"><Label tone="blue" icon={FileText}>Proposal Details</Label>{[['Prepared by',by],['Prepared for',client],['Proposal Date','May 27, 2026'],['Valid for','15 days'],['Contact','[Phone / Email Placeholder]']].map(([a,b])=><div className="detail" key={a}><span>{a}</span><b>{b}</b></div>)}</Card>
</div>
}

function Content({type}){
return({
cover:<Cover/>,
summary:<Summary/>,
challenge:<Challenge/>,
positioning:<Positioning/>,
buyers:<Buyers/>,
outcomes:<Outcomes/>,
workflow:<Workflow/>,
brand:<Brand/>,
preview:<Preview/>,
apps:<Applications/>,
plan:<Plan/>,
roadmap:<Roadmap/>,
pricing:<Pricing/>,
payment:<Payment/>,
required:<Required/>,
timeline:<Timeline/>,
commercial:<Commercial/>,
excluded:<Excluded/>,
next:<Next/>,
approval:<Approval/>,
thanks:<Thanks/>
})[type]||<Summary/>
}

export default function App(){
const[i,setI]=useState(0),s=slides[i],total=slides.length,progress=useMemo(()=>((i+1)/total)*100,[i,total]);
return <div className="page"><div className="stage"><BG/><main><AnimatePresence mode="wait"><Shell slide={s} i={i} total={total}><Content type={s.type}/></Shell></AnimatePresence></main><footer><div className="footer-info"><span>Prepared for: <b>{client}</b></span><i/><span>Prepared by: <b>{by}</b></span></div><button onClick={()=>setI(Math.max(0,i-1))} disabled={!i}><ArrowLeft size={14}/>Prev</button><div className="progress"><em style={{width:`${progress}%`}}/></div><button onClick={()=>setI(Math.min(total-1,i+1))} disabled={i===total-1}>Next<ArrowRight size={14}/></button></footer></div></div>
}
