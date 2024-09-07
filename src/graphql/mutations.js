
import { gql } from '@apollo/client';

export const SUBMIT_FEEDBACK = gql`
  mutation CreateFeedbackInput($feedback: String!, $like_grant_id: Int!, $dislike_grant_id: Int!) { 
    createFeedback(createFeedbackInput: {
      feedback: $feedback,
      like_grant_id: $like_grant_id,
      dislike_grant_id: $dislike_grant_id
    }) {
      id
      feedback
      createdAt
      updatedAt
      like_grant_id
      dislike_grant_id
    }
  }
`;