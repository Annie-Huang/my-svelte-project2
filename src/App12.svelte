<!--From Bindings/Dimensions to Bindings/Dimensions-->
<script>
    let w;
    let h;
    let size = 42;
    let text = 'edit me';
</script>

<!--display: inline elements cannot be measured with this approach; nor can elements that can't contain other elements
    (such as <canvas>). In these cases you will need to measure a wrapper element instead.-->
<style>
    input { display: block; }
    div { display: inline-block; }
    span { word-break: break-all; }
</style>

<input type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
    <span style="font-size: {size}px">{text}</span>
</div>
