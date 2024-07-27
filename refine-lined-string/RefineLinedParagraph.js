document.addEventListener("click", (e) => {
    if (e.shiftKey) {
        refineLinedParagraph();
    }
});

function refineLinedParagraph() {
    let selection;
    let target;
    let refined;
    const spacesOver2 = /[ ]{2,}/g;
    const endsWithLineFed = /(.)\n/g;

    selection = document.getSelection();
    target = selection.toString();
    refined = target.replaceAll(spacesOver2, "")
        .replaceAll(endsWithLineFed, `$1`)
        .replaceAll(endsWithLineFed, `$1\n\n`);

    alert(refined);
}
