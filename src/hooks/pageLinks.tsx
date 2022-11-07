export default function pageLinks(num: number) {
    let arr = [];

    for (let i = 1; i < num + 1; i++) {
        // @ts-ignore
        arr.push({ name: `0${i}`, path: `/${i}` });
    }

    return arr;
}
