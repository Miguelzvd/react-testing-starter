import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";
describe("ProductGallary", () => {
  it("should render image links if array of image url exists", () => {
    const urls = ["https://gallary1.com", "https://gallary2.com"];
    render(<ProductImageGallery imageUrls={urls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(urls.length);

    urls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });

  it("should not render image links if array of image url does not exists", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement()
  });
});
