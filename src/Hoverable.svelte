<script>
    let hovering;

    function enter() {
        hovering = true;
    }

    function leave() {
        hovering = false;
    }
</script>

<!--Remember you can also use the {hovering} shorthand, if you prefer.-->
<div on:mouseenter={enter} on:mouseleave={leave}>
    <slot hovering={hovering}></slot>
</div>
