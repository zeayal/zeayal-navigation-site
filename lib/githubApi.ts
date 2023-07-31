import { Octokit } from "@octokit/core";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const OWNER = "zeayal";
const REPO = "blog";

export const githubGetAllIssues = async () => {
  const res = await octokit.request(`GET /repos/${OWNER}/${REPO}/issues`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return res?.data || [];
};

export async function githubGetIssueDetail(issue_number: string) {
  const res = await octokit.request(
    `GET /repos/${OWNER}/${REPO}/issues/${issue_number}`,
    {
      owner: "OWNER",
      repo: "REPO",
      issue_number: "ISSUE_NUMBER",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );
  return res.data;
}
