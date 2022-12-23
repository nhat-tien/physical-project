import Image from "next/image"
import QuizBox from "../../../components/QuizBox";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import LayoutArticle from "../../../components/LayoutArticle";

export default function Post() {
    const quiz = {
        title: 'Hiện tượng sau là loại nhiễm điện gì: "Cho thanh kim loại không nhiễm điện chạm vào quả cầu đã nhiễm điện thì thanh kim loại nhiễm điện cùng dấu với điện tích của quả cầu"',
        A: 'Nhiễm điện do hưởng ứng',
        B: 'Nhiễm điện do cọ xát',
        C: 'Nhiễm điện do tiếp xúc',
        D: 'Nhiễm điện do "vì nó thích thế"',
        answer: 'C'
    }
    return (
       <LayoutArticle>
            <h2 className="heading">Định luật Coulomb</h2>
            <h3 className="heading2">I. Sự nhiễm điện của các vật. Điện tích. Tương tác điện.</h3>
            <p className='heading3'>1. Sự nhiễm điện của các vật.</p>
            <p className="heading3">- Nhiễm điện do cọ xát:</p>
            <Image src='/dien/pic1-1.png' width={600} height={600} alt='nhiem-dien-co-sat' className="mx-auto"></Image>
            <p>Cọ xát một thước nhựa vào vải len, ta thấy thước nhựa có thể hút được các vật nhẹ như giấy</p>
            <p className='heading3'>- Nhiễm điện do tiếp xúc</p>
            <Image src='/dien/pic1.2.png' width={200} height={200} alt='nhiem-dien-co-sat' className="mx-auto"></Image>
            <p>Cho thanh kim loại không nhiễm điện chạm vào quả cầu đã nhiễm điện thì thanh kim loại nhiễm điện cùng dấu với điện tích của quả cầu</p>
            <p>Đưa thanh kim loại ra xa quả cầu thì thanh kim loại vẫn nhiễm điện.</p>
            <p className="heading3">- Nhiễm điện do hưởng ứng</p>
            <Image src='/dien/pic1.3.png' width={200} height={200} alt='nhiem dien hưởng ứng' className="mx-auto"></Image>            
            <p>Đưa thanh kim loại không nhiễm điện đến gần quả cầu đã nhiễm điện nhưng không chạm vào quả cầu, thì hai đầu thanh kim loại được nhiễm điện. Đầu gần quả cầu hơn nhiễm điện trái dấu với điện tích quả cầu, đầu xa hơn nhiễm điện cùng dấu.</p>
<p>Đưa thanh kim loại ra xa quả cầu thì thanh kim loại trở về trạng thái không nhiễm điện như lúc đầu</p>
            <p className="heading3">2. Điện tích. Điện tích điểm</p>
            <p>- Vật bị nhiễm điện còn gọi là vật mang điện, vật tích điện hay vật chứa điện tích.</p>
            <p>- Điện tích điểm là một vật tích điện có kích thước rất nhỏ so với khoảng cách tới điểm mà ta xét. Điện tích điểm là điện tích được coi như tập trung tại một điểm.</p>
            <p className="heading3">3. Tương tác điện. Hai loại điện tích</p>
            <p>- Các điện tích hoặc đẩy nhau, hoặc hút nhau. Sự đẩy nhau hay hút nhau giữa các điện tích đó là tương tác điện.</p>
            <Image src='/dien/pic1.4.png' width={200} height={200} alt='tuong tac dien' className="mx-auto"></Image>
            <p>- Có hai loại điện tích là điện tích dương (+) và điện tích âm (-).</p>
            <p>+ Các điện tích cùng loại (cùng dấu) thì đẩy nhau.</p>
            <p>+ Các điện tích khác loại (khác dấu) thì hút nhau.</p>
            <p>- Hai lực tác dụng vào hai điện tích là hai lực trực đối, cùng phương, ngược chiều, độ lớn bằng nhau và đặt vào hai điện tích.</p>
            <p className="heading2">II. Định luật Cu-lông. Hằng số điện môi.</p>
            <p className="heading3">1. Định luật Cu-lông.</p>
            <p>Năm 1785, Cu-lông, nhà bác học người Pháp, lần đầu tiên lập được định luật về sự phụ thuộc của lực tương tác giữa các điện tích điểm (gọi tắt là lực điện hay lực Cu-lông) vào khoảng cách giữa chúng.</p>
            <p>- Nội dung: Lực hút hay đẩy giữa hai điện tích điểm có phương trùng với đường thẳng nối hai điện tích điểm đó, có độ lớn tỉ lệ thuận với độ lớn của hai điện tích và tỉ lệ nghịch với bình phương khoảng cách giữa chúng.</p>
            <p>Biểu thức:</p>
            <BlockMath math="F = k\frac{{\left| {{q_1}{q_2}} \right|}}{{{r^2}}}"></BlockMath>
            <p>Lực tương tác có:</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Phương: là đường thẳng nối giữa 2 điện tích điểm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Chiều:</p> 
<Image src='/dien/pic1.5.png' width={500} height={500} alt='chieu cua tu' className="mx-auto"></Image>
<p>+ Độ lớn:</p>
<p>&nbsp;Tỉ lệ thuận với tích độ lớn q<sub>1</sub>, q<sub>2</sub></p>
<p>&nbsp;Tỉ lệ nghịch với bình phương khoảng cách</p>
<BlockMath math="{F_{12}} = {F_{21}} = F = k\frac{{\left| {{q_1}{q_2}} \right|}}{{{r^2}}}"></BlockMath>
<p>Trong đó:</p>
<ul>
<li className="list-disc"><InlineMath math="{q_1},{\rm{ }}{q_2}"></InlineMath>&nbsp;&nbsp;được gọi là điện tích điểm (đơn vị : C (Culông)</li>
<li className="list-disc">r là khoảng cách của 2 điện tích điểm</li>
<li className="list-disc">k là hằng số Cu-lông:&nbsp;<InlineMath math="k = {9.10^9}\left( {N.{m^2}/{c^2}} \right)"></InlineMath></li>
</ul>
<p className="heading3">2. Hằng số điện môi.</p>
<p>- Điện môi là một môi trường cách điện.</p>
<p>- Khi đặt các điện tích điểm trong một điện môi (chẳng hạn trong một chất dầu cách điện) đồng tính chiếm đầy không gian xung quanh các điện tích, thì lực tương tác sẽ yếu đi&nbsp;ε lần so với khi đặt chúng trong chân không.&nbsp;ε được gọi là hằng số điện môi của môi trường (ε&nbsp;&nbsp;≥ 1). Đối với chân không thì&nbsp;ε = 1 còn đối với các môi trường khác&nbsp;ε &gt;1.</p>
<p>- Hằng số điện môi là một đặc trưng quan trọng cho tính chất điện của một chất cách điện. Nó cho biết khi đặt điện tích trong chất đó thì lực tương tác giữa các điện tích sẽ nhỏ đi bao nhiêu lần so với khi đặt chúng trong chân không.</p>
<BlockMath math='F = k\frac{{\left| {{q_1}{q_2}} \right|}}{{\varepsilon {r^2}}}'></BlockMath>    
<p className="heading3">3. Nguyên lý chồng chất lực điện&nbsp;</p>
<p>Giả sử có n điện tích điểm q<sub>1</sub>, q<sub>2</sub>,…, q<sub>n</sub> tác dụng lên điện tích điểm q những lực tương tác tĩnh điện<InlineMath math='\overrightarrow {{F_1}} ,\overrightarrow {{F_2}} ,...,\overrightarrow {{F_n}}'></InlineMath>thì lực điện tổng hợp do các điện tích điểm trên tác dụng lên điện tích q tuân theo nguyên lý chồng chất lực điện.</p>
<BlockMath math='\overrightarrow F  = \overrightarrow {{F_1}}  + \overrightarrow {{F_2}}  + ... + \overrightarrow {{F_n}}'></BlockMath>   
<p className="heading3">Sơ đồ tư duy về điện tích, định luật Cu-lông</p>
<Image src='/dien/pic1.6.png' width={700} height={700} alt='so do tu duy' className="mx-auto"></Image>
<p>Nguồn: <a href='https://loigiaihay.com/ly-thuyet-dien-tich-dinh-luat-cu-long-c62a6517.html' target='_blank' rel="noreferrer">loigiaihay.com</a></p>
    <QuizBox quiz={quiz}/>
</LayoutArticle>
    )
}