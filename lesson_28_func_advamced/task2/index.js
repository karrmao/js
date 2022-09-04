const favorites = ['id-8', 'id-12'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: [
            {
              id: 'id-8',
              name: 'Candys',
              nodes: [],
            },
          ],
        },
      ],
    },
    {
      id: 'id-12',
      name: 'Vegan Food',
      nodes: [],
    },
  ],
};

export const markFavorites = (tree, favorites) => {
  const isFavorites = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorites,
    nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
};

const result = markFavorites(tree, favorites);
console.log(result);
