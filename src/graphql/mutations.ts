
import { gql } from '@apollo/client';

export const SUBMIT_FEEDBACK = gql`
  mutation CreateFeedback($createFeedbackInput: CreateFeedbackInput!) {
    createFeedback(createFeedbackInput: $createFeedbackInput) {
      id
      feedback
      like_grant_id
      dislike_grant_id
    }
  }
`;

export const GET_GRANTS_AND_FEEDBACKS = gql`
  query GrantsAndFeedback {
    grants {
      areasOfFunding
      avgAmount
      deadline
      foundation
      id
      location
      matchDate
      status
      title
    }
    feedbacks {
      id
      feedback
      like_grant_id
      dislike_grant_id
    }
  }
`