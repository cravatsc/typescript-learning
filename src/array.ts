export const groupByKey = <T>(objects: T[], key: string): Record<string, T[]> =>
  objects.reduce((grouped: Record<string, T[]>, object: T) => {
    const keyValue = object[key];
    grouped[keyValue] = grouped[keyValue]
      ? [...grouped[keyValue], object]
      : [object];
    return grouped;
  }, {});

export const groupByFunction = <T>(
  objects: T[],
  func: (object: T) => string | number
): Record<string, T[]> =>
  objects.reduce((grouped: Record<string, T[]>, object: T) => {
    const keyValue = func(object);
    grouped[keyValue] = grouped[keyValue]
      ? [...grouped[keyValue], object]
      : [object];
    return grouped;
  }, {});

export const sumArray = <T>(
  objects: T[],
  sumFunction: (object: T) => number
): number =>
  objects.reduce((sum: number, object) => sum + sumFunction(object), 0);
