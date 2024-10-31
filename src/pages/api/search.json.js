// async function getPosts() {
//     return `["hi"]`
// }

export async function get({}) {
    return {
        body: JSON.stringify({
            name: "Carlos"
        })
    }
}