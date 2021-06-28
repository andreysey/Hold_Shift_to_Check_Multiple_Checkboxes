window.addEventListener('DOMContentLoaded', () => {

    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

    let lastChecked;

    function handleCheck(e) {
        let inBetween = false;
        if (e.shiftKey && this.checked) {
            checkboxes.forEach(item => {
                console.log(item);
                if (item === this || item === lastChecked) {
                    inBetween = !inBetween;
                    console.log('in')
                }

                if (inBetween) {
                    item.checked = true;
                }
            })
        }
        lastChecked = this;

    }

    checkboxes.forEach(item => {
        item.addEventListener('click', handleCheck);
    });
});
