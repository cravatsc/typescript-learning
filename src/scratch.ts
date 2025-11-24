class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//iterative
const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  let newList: ListNode | null = null; //first node to return
  let currentNode: ListNode | null = null; //iterating node
  while (list1 || list2) {
    //list1 reached end, 2 still iterating
    if (!list1) {
      if (currentNode) {
        currentNode.next = list2;
      } else {
        currentNode = list2;
        newList = list2;
      }
      list2 = null;
      continue;
    }
    //list2 reached end, 1 still iterating
    if (!list2) {
      if (currentNode) {
        currentNode.next = list1;
      } else {
        currentNode = list1;
        newList = list1;
      }
      list1 = null;
      continue;
    }
    //both still iterating, compare
    if (list1.val > list2.val) {
      if (currentNode) {
        currentNode.next = list2;
        currentNode = currentNode.next;
      } else {
        newList = list2;
        currentNode = list2;
      }
      list2 = list2.next;
    } else {
      if (currentNode) {
        currentNode.next = list1;
        currentNode = currentNode.next;
      } else {
        newList = list1;
        currentNode = list1;
      }
      list1 = list1.next;
    }
  }

  return newList;
};

const mergeTwoListsRecursively = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  //base case - check for null list and return other
  //this will cover the step where both are null
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  //recursive step - eval which value is lower
  if (list1.val > list2.val) {
    //if list2 is smaller,
    list2.next = mergeTwoListsRecursively(list1, list2.next);
    return list2;
  } else {
    list1.next = mergeTwoListsRecursively(list1.next, list2);
    return list1;
  }
};

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const l = mergeTwoListsRecursively(list1, list2);

let list3 = new ListNode(0);

// const y = mergeTwoLists(null, list3);

// const x = mergeTwoLists(null, null);

const getMajority = (arr: Array<number>): number => {
  return Number(
    Object.entries(
      arr.reduce((map, val) => {
        map[val] = map[val] ? map[val] + 1 : 1;
        return map;
      }, {} as Record<number, number>)
    ).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
  );
};

const a = [3, 2, 3];
const b = [2, 2, 1, 1, 1, 2, 2];

const a1 = a.reduce((map, val) => {
  map[val] = map[val] ? (map[val] += 1) : 1;
  return map;
}, {} as Record<number, number>);
const attributeWithHighestValue = Object.entries(a1).reduce((a, b) =>
  a[1] > b[1] ? a : b
)[0];

// const a2 = [...a1.values()];
// const a3 = [...a1.entries()];
// const a2 = [...a1.entries()].reduce((a, e) => (e[1] > a[1] ? e : a));
console.log(getMajority(a));
console.log(getMajority(b));
// console.log(a1.values());
// console.log(a1.entries());
// console.log(a2);
const s = { a: 1, b: 2 };
console.log(Object.entries(s));

const sa = "{}[]";
const charList = sa.split("");
charList.push("s");
for(let char in charList){}
charList.length 