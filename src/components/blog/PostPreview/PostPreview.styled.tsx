import styled from "styled-components";

import { primaryGradientMixin, StyledLink } from "@/styles/typography";
import { pixelToRem } from "@/utils/style";

export const PreviewCard = styled.article`
	display: grid;
	row-gap: 10px;
`;

export const ExtraInfoWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	${StyledLink} {
		font-size: ${pixelToRem(14)};
		:hover {
			text-decoration: none;
		}
	}
`;
export const PreviewMetadata = styled.p`
	font-size: ${pixelToRem(14)};
	margin: 0;
`;

export const PostPreviewTitle = styled.h3<{ $isHovered: boolean }>`
	font-size: 2rem;
	line-height: 1.1;
	color: var(--color-primary-accent);
	margin: 0;
	padding: 0;

	> span {
		${({ $isHovered }) => $isHovered && primaryGradientMixin}

		:hover {
			${primaryGradientMixin}
		}
	}
`;
export const PostPreviewSummary = styled.p`
	margin: 0;
`;
