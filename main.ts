import{readdirSync as J,readFileSync as B,mkdirSync as C,writeFileSync as D}from'node:fs';
const{MAKEFUN_INPUT_DIR:F='/input',MAKEFUN_OUTPUT_DIR:G='/output'}=process.env;
const T="!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%\"%";
function R(P,Q){
let S=new Int32Array(576),s=0,n=0,c=0,t=0,i=0,o='',e=0;
try{W:for(;;){
if(t==1e6)throw 10;
if(P[c]==null)throw 9;
let op=P[c],w=T.charCodeAt(op)-32;
if(!w)throw 5;
w--;let im=w>>4,y=w>>2&3,z=w&3;
if(c+im>=P.length)throw 9;
t++;
if(s<y||s-y+z>256)throw s<y?2:3;
c+=1+im;
switch(op){
case 0:break W;
case 1:S[s++]=(P[c-1]<<24)>>24;break;
case 2:S[s++]=P[c-4]|P[c-3]<<8|P[c-2]<<16|P[c-1]<<24;break;
case 3:s--;break;
case 4:S[s]=S[s-1];s++;break;
case 5:[S[s-1],S[s-2]]=[S[s-2],S[s-1]];break;
case 6:S[s]=S[s-2];s++;break;
case 7:[S[s-3],S[s-2],S[s-1]]=[S[s-2],S[s-1],S[s-3]];break;
case 23:S[s-1]=-S[s-1]|0;break;
case 27:S[s-1]=~S[s-1];break;
case 48:case 49:case 50:{let v=op>48?S[--s]:0,r=((P[c-2]|P[c-1]<<8)<<16)>>16;if(op<49||(v==0)==(op==49))c+=r;break;}
case 51:if(n==64)throw 7;S[256+n++]=c;c=P[c-2]|P[c-1]<<8;break;
case 52:if(!n)throw 8;c=S[256+--n];break;
case 64:{let a=S[s-1];if(a>>>0>255)throw 6;S[s-1]=S[320+a];break;}
case 65:{let a=S[s-1];if(a>>>0>255)throw 6;S[320+a]=S[s-2];s-=2;break;}
case 80:{let x=''+S[s-1];if(o.length+x.length>65536)throw 11;s--;o+=x;break;}
case 81:if(o.length>65535)throw 11;o+=String.fromCharCode(S[--s]&255);break;
case 82:S[s++]=i<Q.length?Q[i++]:-1;break;
case 83:e=S[--s]&255;break W;
default:{let v=S[s-1],u=S[s-2];if(op>18&&op<23&&!v)throw 4;S[s-2]=[u+v|0,u-v|0,Math.imul(u,v),(u/v)|0,u%v|0,(u>>>0)/(v>>>0)|0,(u>>>0)%(v>>>0)|0,u&v,u|v,u^v,u<<v,u>>v,(u>>>v)|0,u==v?1:0,u<v?1:0,(u>>>0)<(v>>>0)?1:0][op-16-(op>23)-(op>27)-(op>31)];s--;}
}
}}catch(x){e=x;}
return[Buffer.from(o,'latin1'),e];
}
for(const id of J(F)){
let a=F+'/'+id,b=G+'/'+id,[o,e]=R(B(a+'/program.bin'),B(a+'/input.bin'));
C(b,{recursive:true});
D(b+'/stdout.bin',o);
D(b+'/exit.txt',e+'');
}
