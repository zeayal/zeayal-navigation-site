import BlogHeader from "@/components/blog/Header";
import MarkDownRender from "@/components/markdown";
import { githubGetIssueDetail } from "@/lib/githubApi";

async function BlogDetail({ params }: { params: { issue_number: string } }) {
  const { issue_number } = params;
  const issue = await githubGetIssueDetail(issue_number);
  const { title, body } = issue || {};

  return (
    <div className="pt-8">
      <title>{title}</title>
      <BlogHeader />
      <MarkDownRender markdownContent={body} />
    </div>
  );
}

export default BlogDetail;
