export const objectListForAttribute = <T>(
  objects: T[],
  attribute: string
): Record<string, T[]> => {
  return objects.reduce(
    (objectListForAttribute: Record<string, T[]>, object: T) => {
      objectListForAttribute[object[attribute]]
        ? objectListForAttribute[object[attribute]].push(object)
        : (objectListForAttribute[object[attribute]] = [object]);
      return objectListForAttribute;
    },
    {}
  );
};

export const objectListForAttributeByFunction = <T>(
  objects: T[],
  keyFunction: (object: T) => string | number
): Record<string, T[]> => {
  return objects.reduce(
    (objectListForAttribute: Record<string, T[]>, object: T) => {
      objectListForAttribute[keyFunction(object)]
        ? objectListForAttribute[keyFunction(object)].push(object)
        : (objectListForAttribute[keyFunction(object)] = [object]);
      return objectListForAttribute;
    },
    {}
  );
};

export const sumArray = <T>(
  objects: T[],
  sumFunction: (object: T) => number
): number => {
  return objects.reduce((sum: number, object) => sum + sumFunction(object), 0);
};
