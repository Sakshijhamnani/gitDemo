const posts = [{ title: 'POST1' }, { title: 'POST2' }];

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

const promises = [createPost({ title: 'POST3' }), updateLastUserActivityTime()];

Promise.all(promises)
    .then(([createdPost, lastActivityTime]) => {
        
        posts.forEach((post) => {
            console.log(post.title);
        });
        console.log('Last Activity Time:', lastActivityTime);

        return deletePost();
    })
    .then((deletedPost) => {
        console.log('Post deleted:', deletedPost.title);
        
    })
    
    .catch((error) => {
        console.error('Error:', error);
    });
