
function CompareLists(llist1, llist2) {
    let current1 = llist1;
    let current2 = llist2;
    while (current1 && current2) {

        if (current2.data === current1.data) {
            current1 = current1.next;
            current2 = current2.next;
        } else {
            return 0;
        }

    }

    return (current1 === null && current2 === null)

}