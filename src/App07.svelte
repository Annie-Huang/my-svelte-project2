<!--From Bindings/Group inputs to Bindings/Textarea inputs-->
<script>
    let scoops = 1;
    let flavours = ['Mint choc chip'];

    function join(flavours) {
        if (flavours.length === 1) return flavours[0];
        return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
    }

    let menu = [
        'Cookies and cream',
        'Mint choc chip',
        'Raspberry ripple'
    ];

    import marked from 'marked';
    let value = `Some words are *italic*, some are **bold**`;
</script>

<style>
    textarea { width: 100%; height: 200px; }
</style>

<h2>Size</h2>
<!--Not working for the following one...-->
<!--{#each menu as scoops, index}-->
<!--    <label>-->
<!--        <input type=radio bind:group={scoops} value={index}>-->
<!--        {index} scoop(s)-->
<!--    </label>-->
<!--{/each}-->

<label>
    <input type=radio bind:group={scoops} value={1}>
    One scoop
</label>

<label>
    <input type=radio bind:group={scoops} value={2}>
    Two scoops
</label>

<label>
    <input type=radio bind:group={scoops} value={3}>
    Three scoops
</label>

<h2>Flavours</h2>

<!--<label>-->
<!--    <input type=checkbox bind:group={flavours} value="Cookies and cream">-->
<!--    Cookies and cream-->
<!--</label>-->

<!--<label>-->
<!--    <input type=checkbox bind:group={flavours} value="Mint choc chip">-->
<!--    Mint choc chip-->
<!--</label>-->

<!--<label>-->
<!--    <input type=checkbox bind:group={flavours} value="Raspberry ripple">-->
<!--    Raspberry ripple-->
<!--</label>-->

{#each menu as flavour}
    <label>
        <input type=checkbox bind:group={flavours} value={flavour}>
        {flavour}
    </label>
{/each}

{#if flavours.length === 0}
    <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
    <p>Can't order more flavours than scoops!</p>
{:else}
    <p>
        You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
        of {join(flavours)}
    </p>
{/if}

<br/>

<textarea bind:value={value}></textarea>

{@html marked(value)}

<textarea bind:value></textarea>
