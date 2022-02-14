//todo

function mergeLists(head1, head2) {

    let merged = {
        data: 0,
        next: null
    };

    let tail = merged;

    while (true) {
        if (head1 == null) {
            tail.next = head2;
            break;
        }
        if (head2 == null) {
            tail.next = head1;
            break;
        }

        if (head1.data <= head2.data) {
            tail.next = head1;
            head1 = head1.next;
        }
        else {
            tail.next = head2;
            head2 = head2.next;
        }

        /* Advance the tail */
        tail = tail.next;

    }

    return merged.next;


}