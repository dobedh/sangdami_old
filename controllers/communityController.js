
export const contentList = (req, res) => {
    res.render("community")
}

export const newPost = (req, res) => res.render("newPost")


export const postNewItem = async (req, res) => {
    const {
      body: { title, description },
      file: { path },
    } = req;
    try {
      const newPost = await Community.create({
        fileUrl: path,
        title,
        description,
      });
      res.redirect(routes.home);
    } catch (error) {
      res.redirect(routes.community);
    }
  };