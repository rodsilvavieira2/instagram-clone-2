import { Post } from "../../../../@types";

export type PublicationItem = {
  id: string;
  commentsCount: number;
  featuredPhotoUrl: string;
  photosCount: number;
} & Pick<Post, "likesCount">;
