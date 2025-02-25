export function useQueryCategories() {

    const categories = [
      {
      link: "/category/casual",
      name: "Casual"
      },
      {
        link: "/category/gym",
        name: "Gym"
      },
    ]
    

    return {data: categories}
}