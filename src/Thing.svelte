<script>
    // `current` is updated whenever the prop value changes...
    export let current;

    // ...but `initial` is fixed upon initialisation
    const initial = current;
</script>

<p>
    <span style="background-color: {initial}">initial</span>
    <span style="background-color: {current}">current</span>
</p>
