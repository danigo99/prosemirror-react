export const initialDoc = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Here is an example of callout usage...."
        }
      ]
    },
    {
      type: "callout",
      attrs: {
        type: "info"
      },
      content: [
        {
          type: "paragraph",
          attrs: {
            textAlign: null
          },
          content: [
            {
              type: "text",
              text: "For your "
            },
            {
              type: "text",
              marks: [
                {
                  type: "strong"
                }
              ],
              text: "information!"
            }
          ]
        }
      ]
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Go to `doc.ts` to change type/content"
        }
      ]
    }
  ]
};
