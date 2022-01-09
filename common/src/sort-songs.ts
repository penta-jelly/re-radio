export interface Song {
  readonly createdAt: Date;
  readonly status: 'PENDING' | 'PLAYING' | 'PLAYED' | 'SKIPPED';
  readonly upVoteUserIds: ReadonlyArray<number>;
  readonly downVoteUserIds: ReadonlyArray<number>;
}

/**
 * @description Sorting rule: Playing > Pending > most scored > created time > Played or Skipped
 */
export function sortSongs<T extends Song>(songs: T[]): T[] {
  return songs.sort((songA, songB) => {
    if (songA.status === 'PLAYING') return -1;
    if (songA.status === 'PLAYED' || songA.status === 'SKIPPED') return 1;
    const songAScore = computeSongScore(songA);
    const songBScore = computeSongScore(songB);
    const comparableScore = songAScore - songBScore;
    if (comparableScore === 0) {
      return songA.createdAt.getTime() - songB.createdAt.getTime();
    }
    return comparableScore;
  });
}

/**
 * @description Calculate song score base on up votes and down votes count
 */
export function computeSongScore<T extends Song>(song: T): number {
  return song.upVoteUserIds.length - song.downVoteUserIds.length;
}
