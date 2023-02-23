import { withOGImage } from "next-api-og-image";
import Color from "components/preview";

export default withOGImage({
  template: {
    react: ({ color }) => <Color color={color} />,
  },
});
