import {
	PreviewCard,
	ExtraInfoWrapper,
	PreviewMetadata,
	PostPreviewTitle,
	PostPreviewSummary,
} from "./PostPreview.styled";

import { PostNotPublishedWarning } from "@/styles/blog";
import { BlogPostsPreviewLayout } from "@/styles/layouts";
import { LinkTo } from "@/styles/typography";
import { MDXBundledResultProps } from "@/typings/blog";
import { useHover } from "@/utils/hooks";

type TBlogPostPreviewProps = Pick<MDXBundledResultProps, "frontmatter" | "slug">;
export const BlogPostPreview = ({ frontmatter, slug }: TBlogPostPreviewProps) => {
	const [hoverRef, isHovered] = useHover<HTMLAnchorElement>();

	return (
		<PreviewCard>
			<PostPreviewTitle $isHovered={isHovered}>
				<LinkTo href={`/blog/${slug}`} scroll={false} passHref $unstyledOnHover>
					{frontmatter.title}
				</LinkTo>
			</PostPreviewTitle>
			<PostPreviewSummary>
				{!frontmatter.published && <PostNotPublishedWarning />}
				{frontmatter.summary}
			</PostPreviewSummary>
			<ExtraInfoWrapper>
				<PreviewMetadata>
					{new Date(frontmatter.publishedAt).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</PreviewMetadata>
				<LinkTo ref={hoverRef} href={`/blog/${slug}`}>
					Read more
				</LinkTo>
			</ExtraInfoWrapper>
		</PreviewCard>
	);
};

type TBlogPostsPreviewProps = { posts: Array<TBlogPostPreviewProps> };
export const BlogPostsPreviews = ({ posts }: TBlogPostsPreviewProps) => (
	<BlogPostsPreviewLayout>
		{posts.map(({ frontmatter, slug }, index) => (
			<BlogPostPreview {...{ frontmatter, slug }} key={index} />
		))}
	</BlogPostsPreviewLayout>
);
