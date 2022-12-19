import {
    publish
} from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/zrgio/resume-site.git',
        user: {
            name: 'Sergio',
            email: 'sergioulloa@protonmail.com'
        },
        dotfiles: true
    },
    (e) => {
        console.log(e);
    }
);
