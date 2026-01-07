
export enum DataTable {
    None = 0,
    Number = 1,
    String = 2,
    DateTime = 3
}

export enum RootMode
{
    None = 0,
    Node = 1,
    Leaf = 2,
    RawLeaf = 3
}

export enum MergeMode
{
    None = 0,
    InnerJoin = 1,
}

export enum ExecutionMode
{
    None = 0,
    Parallel = 1,
    Sequential = 2
}

export enum DurationType
{
    None = 0,
    Instant = 1,
    Step = 2,
    UntilNext = 3,
    BasedOnData = 4
}

export enum SortDirection
{
    None = 0,
    Asc = 1,
    Desc = 2
}

export enum DatePart
{
    None = 0,
    Year = 1,
    Month = 2,
    Day = 3,
    Hour = 4,
    Minute = 5,
    Second = 6
}
