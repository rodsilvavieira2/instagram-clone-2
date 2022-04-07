export type User = {
  id: string;
  userName: string;
  subName: string;
  posts: number;
  followers: number;
  flowing: number;
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Comment = {
  id: string;
  comment: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
};

export type GalleryItem = {
  id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
};

type WhoLikedItem = string[];

export type Post = {
  id: string;
  userID: string;
  user: User;
  comments: Comment[];
  gallery: GalleryItem[];
  description: string;
  likesCount: number;
  whoLiked: WhoLikedItem;
  commentsCount: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Suggestion = Pick<
  User,
  "avatarUrl" | "id" | "subName" | "userName"
> & {
  isFollowing: boolean;
};

type FeaturedUrlItem = {
  id: string;
  alt: string;
  url: string;
};

export type Saved = {
  id: string;
  userID: string;
  userName: string;
  collectionName: string;
  postsIds: string[];
  featuredUrls: FeaturedUrlItem[];
  createdAt: Date;
  updatedAt: Date;
};

export type Status = Pick<User, "id" | "avatarUrl" | "userName">;

type ConversationMessage = {
  id: string;
  whoSentID: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Conversation = {
  id: string;
  participants: User[];
  messages: ConversationMessage[];
  createdAt: Date;
  updatedAt: Date;
};

export type Pagination<T> = {
  haveMore: boolean;
  data: T;
};
