<h1>circleSVG</h1>
<p>The svg circle you'll ever need</p>

<h4>Demo</h4>
https://makarovaksenia.github.io/circleSVG/demo/

<h4>Add css and script</h4>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">link</span> <span class="pl-e">rel</span>=<span class="pl-s"><span class="pl-pds">"</span>stylesheet<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text/css<span class="pl-pds">"</span></span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>//((your path to the file))/circleSVG.css<span class="pl-pds">"</span></span>/&gt;
<span class="pl-c">&lt;!-- Add the jquery.min.js --&gt;</span>
&lt;<span class="pl-ent">script</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text/javascript<span class="pl-pds">"</span></span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>//((your path to the file))/circleSVG.js<span class="pl-pds">"</span></span>&gt;&lt;<span class="pl-ent">/script</span>&gt;</pre></div>

<h4>Settings</h4>
<table><thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>number</td>
<td>int</td>
<td>4</td>
<td>Number of the circles (mandatory)</td>
</tr>
<tr>
<td>speed</td>
<td>int</td>
<td>4</td>
<td>Transition speed (from 1 to 12)</td>
</tr>
<tr>
<td>shadowCircle</td>
<td>boolean</td>
<td>true</td>
<td>Enable shadow of the circles</td>
</tr>
<tr>
<td>widthCircle</td>
<td>int</td>
<td>2</td>
<td>Width of the border</td>
</tr>
<tr>
<td>shadowText</td>
<td>boolean</td>
<td>true</td>
<td>Enable shadow of the text</td>
</tr>
<tr>
<td>numberSize</td>
<td>string</td>
<td>"2.5em"</td>
<td>Font size of the number inside circles (you can use px, em, rem)</td>
</tr>
<tr>
<td>textSize</td>
<td>string</td>
<td>"1em"</td>
<td>Font size of the text inside circles (you can use px, em, rem)</td>
</tr>
<tr>
<tr>
<td>fontWeight</td>
<td>string</td>
<td>"300"</td>
<td>Font weight of the text</td>
</tr>
<tr>
<tr>
<td colspan="100%">circles</td>
</tr>
<tr>
<td>count</td>
<td>int</td>
<td>100</td>
<td>Big number (option)</td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>"Title"</td>
<td>Text after number (option)</td>
</tr>
<tr>
<td>colorText</td>
<td>string</td>
<td>"#000"</td>
<td>Color of the text (you can use hex, rgb, rgba)</td>
</tr>
<tr>
<td>colorCircle</td>
<td>string</td>
<td>"#000"</td>
<td>Color of the circle (you can use hex, rgb, rgba)</td>
</tr>
<tr>
<td>background</td>
<td>string</td>
<td>null</td>
<td>Background (you can use hex, rgb, rgba)</td>
</tr>
<tr>
<td>maxAngle</td>
<td>int</td>
<td>360</td>
<td>Max angle of the circle (for example 180 as half of the circle)</td>
</tr>
</tbody></table>

<h4>Example:</h4>
<p>Initialize with (to show one circle):</p>
<div class="highlight highlight-source-js"><pre>
<span class="pl-c">// will be use default settings...</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">"</span>.your-element<span class="pl-pds">"</span></span>).<span class="pl-en">circleSVG</span>();</pre></div>
<p>or use settings:</p>
<div class="highlight highlight-source-js"><pre>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">"</span>.your-element<span class="pl-pds">"</span></span>).<span class="pl-en">circleSVG</span>({
  <span class="pl-c">// normal options...</span>
  number<span class="pl-k">:</span> <span class="pl-c1">4</span>,
  speed<span class="pl-k">:</span> <span class="pl-c1">4</span>,
  shadowText<span class="pl-k">:</span> <span class="pl-c1">false</span>,
  numberSize<span class="pl-k">:</span> <span class="pl-c1">"2.3em"</span>,
  textSize<span class="pl-k">:</span> <span class="pl-c1">"1em"</span>,
  circles<span class="pl-k">:</span> [{
      <span class="pl-c">// first circle...</span>
      count<span class="pl-k">:</span> <span class="pl-c1">43</span>,
      text<span class="pl-k">:</span> <span class="pl-c1">"Shopify Stores"</span>,
      colorText<span class="pl-k">:</span> <span class="pl-c1">"#2f5770"</span>,
      colorCircle<span class="pl-k">:</span> <span class="pl-c1">"#33bfc0"</span>,
      background<span class="pl-k">:</span> <span class="pl-c1">"rgba(51,191,192,.1)"</span>
    }, {
      <span class="pl-c">// second circle...</span>
      count<span class="pl-k">:</span> <span class="pl-c1">81</span>,
      colorCircle<span class="pl-k">:</span> <span class="pl-c1">"#3bb0e1"</span>
    }, {
      <span class="pl-c">// third circle...</span>
      count<span class="pl-k">:</span> <span class="pl-c1">12</span>,
      text<span class="pl-k">:</span> <span class="pl-c1">"Hubspot Stores"</span>,
      colorText<span class="pl-k">:</span> <span class="pl-c1">"#ff0000"</span>,
      colorCircle<span class="pl-k">:</span> <span class="pl-c1">"red"</span>,
      maxAngle<span class="pl-k">:</span> <span class="pl-c1">270</span>
    }]
});</pre></div>

<h4>Dependencies</h4>
<p>jQuery 1.7</p>
