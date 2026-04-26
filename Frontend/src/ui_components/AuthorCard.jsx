import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { BASE_URL } from "@/api";

const AuthorCard = ({ author }) => {
  // Handle profile picture - use profile_picture_url first, then construct from profile_picture
  let profileImageUrl = "/images/default-avatar.png";
  
  if (author.profile_picture_url) {
    profileImageUrl = author.profile_picture_url;
  } else if (author.profile_picture) {
    // Construct full URL for local images
    profileImageUrl = `${BASE_URL}${author.profile_picture}`;
  }

  return (
    <div className="bg-[#F6F6F7] dark:bg-[#252B42] rounded-lg p-6 flex flex-col items-center gap-4">
      {/* Author Image */}
      <img
        src={profileImageUrl}
        alt={author.username}
        className="w-24 h-24 rounded-full object-cover border-2 border-[#4B6BFB]"
      />

      {/* Author Info */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-lg font-semibold text-[#141624] dark:text-white">
            {author.first_name || author.username} {author.last_name}
          </h3>
          <Link
            to={`/profile/${author.username}`}
            className="text-[#4B6BFB] hover:text-[#3a52cc] transition-colors"
            title="View Profile"
          >
            <FiExternalLink size={18} />
          </Link>
        </div>

        {author.job_title && (
          <p className="text-[14px] text-[#4B6BFB] font-medium">{author.job_title}</p>
        )}
      </div>

      {/* Bio */}
      {author.bio && (
        <p className="text-[14px] text-[#696A75] dark:text-[#97989F] leading-relaxed text-center line-clamp-3">
          {author.bio}
        </p>
      )}

      {/* Social Links */}
      <div className="flex gap-3 mt-2">
        {author.linkedin && (
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#696A75] dark:text-[#97989F] hover:text-[#4B6BFB] transition-colors"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}
        {author.twitter && (
          <a
            href={author.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#696A75] dark:text-[#97989F] hover:text-[#4B6BFB] transition-colors"
            title="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5-3.7 8.5" />
            </svg>
          </a>
        )}
        {author.facebook && (
          <a
            href={author.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#696A75] dark:text-[#97989F] hover:text-[#4B6BFB] transition-colors"
            title="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" />
            </svg>
          </a>
        )}
      </div>

      {/* Blog Posts Count */}
      {author.author_posts && author.author_posts.length > 0 && (
        <div className="mt-2 text-[12px] text-[#696A75] dark:text-[#97989F]">
          {author.author_posts.length} публикаци{author.author_posts.length === 1 ? "я" : "й"}
        </div>
      )}
    </div>
  );
};

export default AuthorCard;
