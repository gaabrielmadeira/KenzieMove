import { IReviewForm } from "../../components/ReviewComponents/ReviewForms/AddForm/ReviewFormSchema";

export interface IReviewProviderProps {
  children: React.ReactNode;
}

export interface IReview {
  id: string;
  movieId: string;
  userId: string;
  score: string;
  description: string;
}

export interface IReviewContext {
  reviewList: IReview[];
  addReview: (formData: IReviewForm, movieId: string, userId: string) => void;
  deleteReview: (reviewId: string) => void;
  editReview: (formData: IReviewForm, reviewId: string) => void;
  editingReview: IReview | null;
  setEditingReview: React.Dispatch<React.SetStateAction<IReview | null>>;
  setReviewList: React.Dispatch<React.SetStateAction<IReview[]>>;
}
