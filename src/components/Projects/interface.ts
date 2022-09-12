
export interface ProjectsProps {
  repoUrl: string,
}

export interface RepositoryData {
  name: string;
  description: null | string;
  homepage: null | string;
  html_url: string;
}

// export interface FromGitHub {
  
//     "id": 264294369,
//     "node_id": "MDEwOlJlcG9zaXRvcnkyNjQyOTQzNjk=",
//     "name": "business-card",
//     "full_name": "filip-rybczynski/business-card",
//     "private": false,
//     "owner": {
//         "login": "filip-rybczynski",
//         "id": 65081471,
//         "node_id": "MDQ6VXNlcjY1MDgxNDcx",
//         "avatar_url": "https://avatars.githubusercontent.com/u/65081471?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/filip-rybczynski",
//         "html_url": "https://github.com/filip-rybczynski",
//         "followers_url": "https://api.github.com/users/filip-rybczynski/followers",
//         "following_url": "https://api.github.com/users/filip-rybczynski/following{/other_user}",
//         "gists_url": "https://api.github.com/users/filip-rybczynski/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/filip-rybczynski/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/filip-rybczynski/subscriptions",
//         "organizations_url": "https://api.github.com/users/filip-rybczynski/orgs",
//         "repos_url": "https://api.github.com/users/filip-rybczynski/repos",
//         "events_url": "https://api.github.com/users/filip-rybczynski/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/filip-rybczynski/received_events",
//         "type": "User",
//         "site_admin": false
//     },
//     "html_url": "https://github.com/filip-rybczynski/business-card",
//     "description": null,
//     "fork": false,
//     "url": "https://api.github.com/repos/filip-rybczynski/business-card",
//     "forks_url": "https://api.github.com/repos/filip-rybczynski/business-card/forks",
//     "keys_url": "https://api.github.com/repos/filip-rybczynski/business-card/keys{/key_id}",
//     "collaborators_url": "https://api.github.com/repos/filip-rybczynski/business-card/collaborators{/collaborator}",
//     "teams_url": "https://api.github.com/repos/filip-rybczynski/business-card/teams",
//     "hooks_url": "https://api.github.com/repos/filip-rybczynski/business-card/hooks",
//     "issue_events_url": "https://api.github.com/repos/filip-rybczynski/business-card/issues/events{/number}",
//     "events_url": "https://api.github.com/repos/filip-rybczynski/business-card/events",
//     "assignees_url": "https://api.github.com/repos/filip-rybczynski/business-card/assignees{/user}",
//     "branches_url": "https://api.github.com/repos/filip-rybczynski/business-card/branches{/branch}",
//     "tags_url": "https://api.github.com/repos/filip-rybczynski/business-card/tags",
//     "blobs_url": "https://api.github.com/repos/filip-rybczynski/business-card/git/blobs{/sha}",
//     "git_tags_url": "https://api.github.com/repos/filip-rybczynski/business-card/git/tags{/sha}",
//     "git_refs_url": "https://api.github.com/repos/filip-rybczynski/business-card/git/refs{/sha}",
//     "trees_url": "https://api.github.com/repos/filip-rybczynski/business-card/git/trees{/sha}",
//     "statuses_url": "https://api.github.com/repos/filip-rybczynski/business-card/statuses/{sha}",
//     "languages_url": "https://api.github.com/repos/filip-rybczynski/business-card/languages",
//     "stargazers_url": "https://api.github.com/repos/filip-rybczynski/business-card/stargazers",
//     "contributors_url": "https://api.github.com/repos/filip-rybczynski/business-card/contributors",
//     "subscribers_url": "https://api.github.com/repos/filip-rybczynski/business-card/subscribers",
//     "subscription_url": "https://api.github.com/repos/filip-rybczynski/business-card/subscription",
//     "commits_url": "https://api.github.com/repos/filip-rybczynski/business-card/commits{/sha}",
//     "git_commits_url": "https://api.github.com/repos/filip-rybczynski/business-card/git/commits{/sha}",
//     "comments_url": "https://api.github.com/repos/filip-rybczynski/business-card/comments{/number}",
//     "issue_comment_url": "https://api.github.com/repos/filip-rybczynski/business-card/issues/comments{/number}",
//     "contents_url": "https://api.github.com/repos/filip-rybczynski/business-card/contents/{+path}",
//     "compare_url": "https://api.github.com/repos/filip-rybczynski/business-card/compare/{base}...{head}",
//     "merges_url": "https://api.github.com/repos/filip-rybczynski/business-card/merges",
//     "archive_url": "https://api.github.com/repos/filip-rybczynski/business-card/{archive_format}{/ref}",
//     "downloads_url": "https://api.github.com/repos/filip-rybczynski/business-card/downloads",
//     "issues_url": "https://api.github.com/repos/filip-rybczynski/business-card/issues{/number}",
//     "pulls_url": "https://api.github.com/repos/filip-rybczynski/business-card/pulls{/number}",
//     "milestones_url": "https://api.github.com/repos/filip-rybczynski/business-card/milestones{/number}",
//     "notifications_url": "https://api.github.com/repos/filip-rybczynski/business-card/notifications{?since,all,participating}",
//     "labels_url": "https://api.github.com/repos/filip-rybczynski/business-card/labels{/name}",
//     "releases_url": "https://api.github.com/repos/filip-rybczynski/business-card/releases{/id}",
//     "deployments_url": "https://api.github.com/repos/filip-rybczynski/business-card/deployments",
//     "created_at": "2020-05-15T20:41:09Z",
//     "updated_at": "2020-05-16T18:04:44Z",
//     "pushed_at": "2020-05-16T18:04:41Z",
//     "git_url": "git://github.com/filip-rybczynski/business-card.git",
//     "ssh_url": "git@github.com:filip-rybczynski/business-card.git",
//     "clone_url": "https://github.com/filip-rybczynski/business-card.git",
//     "svn_url": "https://github.com/filip-rybczynski/business-card",
//     "homepage": null,
//     "size": 733,
//     "stargazers_count": 0,
//     "watchers_count": 0,
//     "language": "CSS",
//     "has_issues": true,
//     "has_projects": true,
//     "has_downloads": true,
//     "has_wiki": true,
//     "has_pages": true,
//     "forks_count": 0,
//     "mirror_url": null,
//     "archived": false,
//     "disabled": false,
//     "open_issues_count": 0,
//     "license": null,
//     "allow_forking": true,
//     "is_template": false,
//     "web_commit_signoff_required": false,
//     "topics": [],
//     "visibility": "public",
//     "forks": 0,
//     "open_issues": 0,
//     "watchers": 0,
//     "default_branch": "master"

// }